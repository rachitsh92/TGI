import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Vote, Shield } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              alt="Digital Solutions"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Solution
              </h2>
              <p className="mt-4 text-gray-600">
                We're building a comprehensive digital governance platform that
                transforms how organizations manage their decision-making processes.
              </p>
            </motion.div>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: <FileCheck className="h-6 w-6 text-blue-600" />,
                  title: "Digital Document System",
                  description:
                    "Secure, accessible storage for all governance documents with version control and audit trails.",
                },
                {
                  icon: <Vote className="h-6 w-6 text-blue-600" />,
                  title: "Smart Voting Platform",
                  description:
                    "Streamlined voting processes with real-time results and automated record-keeping.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-blue-600" />,
                  title: "Enhanced Security",
                  description:
                    "Advanced encryption and authentication to protect sensitive governance data.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-start">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
