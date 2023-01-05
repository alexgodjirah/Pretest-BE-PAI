import React, { useState } from "react";
import "../../styles/CareerPage/FAQ/index.css";

export default function FAQ() {
    const faqs = [
        {
            question: "Does PAI open for the internship program?",
            answer: `Yes we are open 6 months internship for magang kampus merdeka program in collaboration with Jember University. So if you are a student from Jember University, come and join us!`,
        },
        {
            question: "How to apply as team?",
            answer: `Apply online on the career page. Your application will be review maximum of 7 days of work since you applied. If we love your talent profile even when we aren't recruiting, you will be selected on our talent pool and get the priorities when we do recruitment.`,
        },
        {
            question: "When do PAI usually hire a new team?",
            answer: `Search on the career page. We don't have an opening scheduled, so check our website and other social media on Instagram or LinkedIn.`,
        },
        {
            question: "How will I know if I was selected or not?",
            answer: `Only selected people who pass the assessment will inform by e-mail. We will close or announce the job posting on our website and social media. For those who don't get the e-mail within 15 days or during the recruitment period, you free to assume that you are a great talent, it's just that Pandawa Agri doesn't suit you to develop at the time. Cheer up and Move On!`,
        },
        {
            question:
                "Can I apply in the future or apply for more than one role?",
            answer: `Yes. As long as you meet the requirements, it’s open for you!`,
        },
    ];

    const [click, setClick] = useState(false);

    function toggle(index) {
        if (click === index) {
            // If clicked question is already active, then clise it.
            return setClick(null);
        }

        setClick(index);
    }

    return (
        <>
            <main className="faq container_2">
                <div className="faq--title">
                    <h1 className="font--h1">FAQ</h1>
                    <h4 className="font--h4">What #PAIoneers ask about?</h4>
                    <div className="line"></div>
                </div>

                <div className="faq--accordion">
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion--container">
                            <div
                                className="accordion--question"
                                onClick={() => toggle(index)}
                            >
                                <h3 className="font--h3">{faq.question}</h3>
                                <span className="font--h3">
                                    {click === index ? `-` : `+`}
                                </span>
                            </div>

                            {click === index && (
                                <div className="accordion--answer">
                                    <p className="font--p">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
