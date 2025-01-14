"use client"
import React, {FormEvent, useRef, useState} from "react";
import Image from "next/image";

interface IMessage {
    role: "user" | "bot";
    content: string;
}

const ChatWidgets: React.FC = () => {
    const scrollTargetRef = useRef<HTMLDivElement>(null);
    const initialMessages: IMessage[] = [
        {
            role: "user",
            content: "Hi, what is websitebot?",
        },
        {
            role: "bot",
            content:
                "WebsiteBot is a software application designed to perform automated tasks on websites.",
        },
    ];
    const [messages, setMessages] = useState<IMessage[]>(initialMessages);
    const [isMinimized, setIsMinimized] = useState(true);


    const handleSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = (e.target as any).message.value as string;
        if (!message) {
            return;
        }

        setMessages([...messages, {role: "user", content: message}]);
        (e.target as any).message.value = "";
        setTimeout(() => {
            if (scrollTargetRef.current) {
                scrollTargetRef.current.scrollIntoView({behavior: "smooth"});
            }
        }, 100);
    };

    const handleToggle = () => {
        setIsMinimized(!isMinimized);
    };

    const handleCloseChat = () => {
        setMessages(initialMessages);
        setIsMinimized(true);
    };


    return (
        <div
            className={`fixed bottom-0 right-0 mb-4 mr-4 bg-white max-w-[400px] z-10 ${isMinimized ? "rounded-full w-16 h-16" : "rounded-lg"}`}>
            {isMinimized ? (
                <img src="/assets/image/isma.svg" alt="chat-icon" className="w-16 h-16" onClick={handleToggle}/>
            ) : (
                <>
                    <div className="p-4 font-medium cursor-pointer flex justify-between items-center bg-white">
                        <p>Chat with me!</p>
                        <div>
                            <button onClick={handleToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-circle-chevron-down">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="m16 10-4 4-4-4"/>
                                </svg>
                            </button>
                            <button
                                onClick={handleCloseChat}> {/* This should point to a different function that closes the chat */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-circle-x">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="m15 9-6 6"/>
                                    <path d="m9 9 6 6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-300/50 border-t border-gray-300/50">
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600 h-[400px] overflow-y-auto">
                            <ul className="space-y-4 px-4">
                                {messages.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex items-center ${item.role === "user" ? "ml-10 justify-end" : "mr-10"}`}>
                                        <p className="bg-gray-100 p-4 rounded-md">{item.content}</p>
                                    </li>
                                ))}
                            </ul>
                            <div ref={scrollTargetRef}></div>
                        </div>
                        <form
                            onSubmit={handleSubmitMessage}
                            className="p-4 flex gap-2 text-base font-semibold leading-7"
                        >
                            <input
                                name="message"
                                placeholder="Ask any question"
                                className="px-2 py-1.5 border rounded-md flex-1 font-normal focus:outline-none focus:border-gray-400"
                            />
                            <button className="bg-gray-600 px-2.5 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatWidgets;