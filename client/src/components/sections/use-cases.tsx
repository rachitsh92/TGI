import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Vote, ChartBar, MessageSquare, Building2, Receipt } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Document Management",
      description: "Digital storage and easy retrieval of all society documents including notices, minutes of meetings, and bylaws.",
    },
    {
      icon: <Vote className="h-8 w-8 text-blue-600" />,
      title: "Digital Voting",
      description: "Pre-GBM online polls and voting system for gauging member interest and making informed decisions.",
    },
    {
      icon: <ChartBar className="h-8 w-8 text-blue-600" />,
      title: "Financial Transparency",
      description: "Detailed breakdown of society expenses, contractor details, and real-time budget tracking.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Community Forum",
      description: "Platform for members to discuss proposals, share ideas, and provide feedback on society matters.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Maintenance Tracking",
      description: "System for tracking maintenance requests, contractor assignments, and work completion status.",
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Bill Management",
      description: "Digital platform for viewing and tracking all society-related bills and payments.",
    },
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transforming Society Management
          </h2>
          <p className="mt-4 text-gray-600">
            Discover the many ways our digital platform can revolutionize your society's operations
            and enhance community engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div>{useCase.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
