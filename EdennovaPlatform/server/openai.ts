import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Fallback responses for when AI service is unavailable
const fallbackResponses: { [key: string]: string } = {
  services: "Edennova offers comprehensive AI-powered PLM solutions including digital transformation, predictive analytics, automated optimization, and seamless integration with 3DEXPERIENCE platform. We specialize in automotive, aerospace, and oil & gas industries. For detailed information about our services, please visit our Services page or contact us at Info@edennova.com.",
  
  automotive: "Our automotive PLM solutions help manufacturers accelerate product development, improve quality control, and reduce time-to-market. We've helped clients achieve up to 45% efficiency improvements and 30% cost reductions. Learn more about our automotive solutions on our website or schedule a demo by contacting Info@edennova.com.",
  
  aerospace: "For the aerospace and defense industry, we provide specialized PLM solutions that ensure compliance, enhance collaboration, and streamline complex product lifecycles. Our solutions are designed to meet stringent industry standards. Contact our aerospace experts at Info@edennova.com for more details.",
  
  oilgas: "Our oil & gas PLM solutions focus on asset optimization, predictive maintenance, and operational efficiency. We help energy companies transform their digital infrastructure for better performance and safety. Reach out to Info@edennova.com to discuss your energy sector needs.",
  
  contact: "You can reach us at Info@edennova.com or call +91 - 9962439050. We're located at Garden of Eden, Chennai, India. Our team is available Monday through Friday, 9AM - 6PM IST. For immediate assistance or to schedule a demo, please use our contact form on the website.",
  
  demo: "We'd be happy to show you how our AI-powered PLM solutions can transform your business. To schedule a personalized demo, please contact us at Info@edennova.com or call +91 - 9962439050. You can also fill out our contact form and we'll reach out to arrange a convenient time.",
  
  casestudies: "We have numerous success stories across automotive, aerospace, and oil & gas industries. Our solutions have helped clients achieve significant improvements in efficiency, cost reduction, and time-to-market. Visit our Case Studies page to learn more, or contact Info@edennova.com for specific examples relevant to your industry.",
  
  ai: "Our AI integration services help organizations leverage artificial intelligence within their PLM workflows. This includes predictive analytics, automated optimization, intelligent decision support, and machine learning models tailored to your industry. Contact our AI specialists at Info@edennova.com to discuss your specific requirements.",
  
  pricing: "Our pricing is customized based on your specific needs, industry requirements, and implementation scope. For a detailed quote and pricing information, please contact our sales team at Info@edennova.com or call +91 - 9962439050. We'll be happy to discuss options that fit your budget and requirements."
};

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for keywords and return appropriate responses
  if (lowerMessage.includes('service') || lowerMessage.includes('solution') || lowerMessage.includes('offer')) {
    return fallbackResponses.services;
  }
  
  if (lowerMessage.includes('automotive') || lowerMessage.includes('car') || lowerMessage.includes('vehicle')) {
    return fallbackResponses.automotive;
  }
  
  if (lowerMessage.includes('aerospace') || lowerMessage.includes('aviation') || lowerMessage.includes('defense')) {
    return fallbackResponses.aerospace;
  }
  
  if (lowerMessage.includes('oil') || lowerMessage.includes('gas') || lowerMessage.includes('energy')) {
    return fallbackResponses.oilgas;
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
    return fallbackResponses.contact;
  }
  
  if (lowerMessage.includes('demo') || lowerMessage.includes('presentation') || lowerMessage.includes('show')) {
    return fallbackResponses.demo;
  }
  
  if (lowerMessage.includes('case study') || lowerMessage.includes('success') || lowerMessage.includes('example')) {
    return fallbackResponses.casestudies;
  }
  
  if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
    return fallbackResponses.ai;
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return fallbackResponses.pricing;
  }
  
  // Default response
  return "Thank you for your question! I'm here to help you learn about Edennova's AI-powered PLM solutions. You can ask me about our services, industry expertise (automotive, aerospace, oil & gas), case studies, or how to get in touch with our team. For detailed assistance, please contact us at Info@edennova.com or call +91 - 9962439050.";
}

export async function generateChatbotResponse(message: string, context?: string): Promise<string> {
  try {
    const systemPrompt = `You are an AI customer support assistant for Edennova, a company that specializes in AI-powered 3DEXPERIENCE PLM (Product Lifecycle Management) solutions. 

About Edennova:
- We provide AI-enhanced PLM solutions for automotive, aerospace, and oil & gas industries
- Our tagline is "Innovating the Future PLM"
- We're located in Garden of Eden, Chennai, India
- Contact: Info@edennova.com, +91 - 9962439050
- We offer services like digital transformation, AI integration, predictive analytics, and automated optimization
- Our solutions deliver measurable results: 45% efficiency increase, 30% cost reduction, 25% faster time-to-market

Your role:
- Provide helpful information about our PLM services and solutions
- Answer questions about our industry expertise (automotive, aerospace, oil & gas)
- Guide users to appropriate resources (case studies, contact forms, demos)
- Be professional, knowledgeable, and concise
- If you don't know specific technical details, direct users to contact our experts
- Always maintain a helpful and professional tone

Respond in a conversational but professional manner. Keep responses concise but informative.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return response.choices[0].message.content || getFallbackResponse(message);
  } catch (error) {
    console.error("OpenAI API error:", error);
    // Return intelligent fallback response instead of generic error message
    return getFallbackResponse(message);
  }
}