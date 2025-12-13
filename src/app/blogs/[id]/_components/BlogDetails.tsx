import Container from "@/components/shared/Container"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function BlogDetails() {
    return (
        <Container className="min-h-screen bg-white section-padding">

            {/* Header Section */}
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">Understanding Your Client&#39;s Goals</h1>
                <p className="text-balance text-lg leading-relaxed text-gray-600">
                    Before diving into the technical aspects of exit planning, it&#39;s essential to understand what your client
                    truly wants to achieve. Every business owner has different motivations and objectives.
                </p>
            </div>

            {/* Key Questions Section */}
            <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">Key Questions to Ask:</h2>
                <ul className="space-y-3">
                    {[
                        "What are their business goals?",
                        "Is their business ready to be bought and fully transitioned?",
                        "What is the timeline for their exit?",
                        "Are they prepared for the tax and legal aspects?",
                    ].map((question, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gray-400" />
                            <span className="text-gray-700">{question}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Preparing a Roadmap Section */}
            <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">Preparing a Roadmap for a Smooth Exit</h2>
                <p className="text-balance leading-relaxed text-gray-600">
                    A successful exit requires meticulous planning. It requires an in-depth understanding of what&#39;s going to be
                    required years. Your job, as their advisor, is to help them create a clear roadmap that considers all legal,
                    financial, operational, and personal considerations.
                </p>
            </div>

            {/* Business Valuation and Risk Assessment Section */}
            <div className="mb-12 grid gap-6 lg:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Business Valuation</h2>
                    <p className="leading-relaxed text-gray-600">Get an accurate business valuation</p>
                </div>
                <Card className="bg-linear-to-b from-[#4176A6] to-[#64A4DE] p-6 text-white shadow-lg">
                    <h3 className="mb-3 text-xl font-semibold">Risk Assessment</h3>
                    <p className="leading-relaxed text-blue-50">
                        Identify any legal, financial, or operational risks that could reduce the value of your client&#39;s business
                        and make sure these are addressed before going to market.
                    </p>
                </Card>
            </div>

            {/* Tax Planning and Team Preparation Section */}
            <div className="mb-12 grid gap-8 lg:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Tax Planning</h2>
                    <p className="leading-relaxed text-gray-600">
                        Tax implications of a sale can be complex and heavily dependent on structure
                    </p>
                </div>
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">Team Preparation</h2>
                    <p className="leading-relaxed text-gray-600">
                        Ensure that key stakeholders and leadership are prepared for the transition
                    </p>
                </div>
            </div>

            {/* Common Pitfalls Section */}
            <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">Common Pitfalls and How to Avoid Them</h2>
                <p className="mb-6 leading-relaxed text-gray-600">
                    Even with the best laid plans, many business owners fall into predictable traps during the exit process. As
                    their trusted advisor, you can help them navigate these challenges.
                </p>

                <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Master Tax Lists</h3>
                    <ul className="space-y-3">
                        {[
                            {
                                title: "PPR",
                                description:
                                    "Help them understand the PPR relief, which offers tax-free capital gains on the sale of their primary residence. Make sure they're fully aware of its criteria and potential exclusions.",
                            },
                            {
                                title: "Understanding a Business's Risks",
                                description:
                                    "Work with them to have a comprehensive evaluation and ensure any legal or operational weaknesses are identified and mitigated.",
                            },
                            {
                                title: "Over-Optimism",
                                description:
                                    "Realistically discuss the company's true market and make sure there are realistic exit timelines and future plans.",
                            },
                            {
                                title: "Poor Documentation",
                                description:
                                    "Ensure all legal, operational, and financial documentation are organized, up to date, and easily accessible when needed.",
                            },
                        ].map((item, index) => (
                            <li key={index} className="border-l-4 border-[#64A4DE] pl-4">
                                <div className="font-semibold text-gray-900">
                                    {index + 1}. {item.title}
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Conclusion Section */}
            <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">Conclusion</h2>
                <p className="text-balance leading-relaxed text-gray-600">
                    As a CPA, you&apos;re uniquely positioned to guide business owners through one of the most important (and often
                    the most stressful) times of their lives. By taking a proactive, comprehensive approach to exit planning,
                    you can help your clients achieve their financial goals while building a lasting legacy. Remember: success
                    starts at the result of careful planning, clear communication, and expert guidance. Start the conversation
                    with your business clients today—and ensure their exit is a smooth and profitable one!
                </p>
            </div>

        </Container>
    )
}
