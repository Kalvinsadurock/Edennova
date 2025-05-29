import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  const submitMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        industry: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-8">
      <h3 className="font-bold text-2xl text-navy-900 mb-6">Get Started Today</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-slate-700 mb-2">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="border-slate-300 focus:border-accent-cyan"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-slate-700 mb-2">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="border-slate-300 focus:border-accent-cyan"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border-slate-300 focus:border-accent-cyan"
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-sm font-medium text-slate-700 mb-2">
            Company
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="border-slate-300 focus:border-accent-cyan"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2">Industry</Label>
          <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
            <SelectTrigger className="border-slate-300 focus:border-accent-cyan">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automotive">Automotive</SelectItem>
              <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
              <SelectItem value="oil-gas">Oil & Gas</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your PLM challenges and goals"
            className="border-slate-300 focus:border-accent-cyan"
          />
        </div>

        <Button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-accent-emerald text-white py-4 text-lg hover:bg-accent-cyan transition-all duration-300 transform hover:scale-105"
        >
          {submitMutation.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
