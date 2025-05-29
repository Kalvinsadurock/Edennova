import { contacts, newsletters, type Contact, type InsertContact, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class DatabaseStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values({
        ...insertContact,
        company: insertContact.company || null,
        industry: insertContact.industry || null,
      })
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check for existing email
    const existing = await db.select().from(newsletters).where(eq(newsletters.email, insertNewsletter.email));
    
    if (existing.length > 0) {
      throw new Error("Email already subscribed");
    }

    const [newsletter] = await db
      .insert(newsletters)
      .values(insertNewsletter)
      .returning();
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters).orderBy(newsletters.createdAt);
  }
}

export const storage = new DatabaseStorage();
