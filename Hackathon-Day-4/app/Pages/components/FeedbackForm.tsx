import { useState, useEffect } from "react";
import { Feedback } from "../types";

export default function FeedbackForm({ onSubmit }: { onSubmit: (feedback: Omit<Feedback, "id">) => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

    // Load feedback from local storage on component mount
    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
        setFeedbackList(storedFeedback);
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newFeedback = {
            id: Date.now(),
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
        };

        const updatedFeedbackList = [newFeedback, ...feedbackList];
        //@ts-expect-error: Object is possibly 'null'.
        setFeedbackList(updatedFeedbackList);
        localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList)); // Store in local storage

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");

        // Optional: Call external onSubmit if needed
        onSubmit(newFeedback);
    };

    const handleRemoveFeedback = (id: number) => {
        //@ts-expect-error: Object is possibly 'null'.
        const updatedFeedbackList = feedbackList.filter((feedback) => feedback.id !== id);
        setFeedbackList(updatedFeedbackList);
        localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList)); // Update local storage
    };



    return (
        <div className="mb-16 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Provide Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Feedback
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        rows={4}
                        placeholder="Your Feedback"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                >
                    Submit Feedback
                </button>
            </form>

            {/* Feedback List */}
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Feedback</h3>
                {feedbackList.length > 0 ? (
                    <div className="space-y-4">
                        {feedbackList.map((feedback) => (
                            <div
                                key={feedback.id}
                                className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-semibold text-gray-800">{feedback.name}</h4>
                                    <span className="text-sm text-gray-500">{new Date(feedback.createdAt).toLocaleString()}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-1">{feedback.email}</p>
                                <p className="text-gray-700">{feedback.message}</p>
                                <button
                                     //@ts-expect-error: Object is possibly 'null'.
                                    onClick={() => handleRemoveFeedback(feedback.id)}
                                    className="mt-2 text-red-500 hover:underline text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No feedback yet. Be the first to provide your thoughts!</p>
                )}
            </div>
        </div>
    );
}
