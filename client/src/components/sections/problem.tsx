import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FileQuestion, Users } from "lucide-react";

export default function Problem() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Current Governance Challenges
          </h2>
          <p className="mt-4 text-gray-600">
            Organizations face significant hurdles in maintaining transparency
            and efficiency in their governance processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <FileQuestion className="h-12 w-12 text-blue-600 mx-auto" />,
              title: "Lack of Transparency",
              description:
                "Decision-making processes are often opaque, leading to trust issues and reduced stakeholder engagement.",
            },
            {
              icon: <Users className="h-12 w-12 text-blue-600 mx-auto" />,
              title: "Limited Participation",
              description:
                "Traditional governance models exclude key stakeholders from important decisions and discussions.",
            },
            {
              icon: <AlertTriangle className="h-12 w-12 text-blue-600 mx-auto" />,
              title: "Inefficient Processes",
              description:
                "Manual, paper-based systems create delays and increase the risk of errors in governance procedures.",
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
                <CardContent className="pt-6 text-center">
                  {item.icon}
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}