import React from "react";
import "../../styles/ContactPage/Contact/index.css";

export default function Contact() {
    const info = [
        {
            id: 1,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            text: `Jl. Raya Benelanlor, Krajan, Kabat Banyuwangi — Jawa Timur 68461 — Indonesia`,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            text: `(0333)6370737`,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            text: `info@pandawaid.com`,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            text: `(+62)811-1077-141`,
        },
    ];

    const socials_icon = [
        { image: "https://via.placeholder.com/600x400/969696/f00000" },
        { image: "https://via.placeholder.com/600x400/969696/f00000" },
        { image: "https://via.placeholder.com/600x400/969696/f00000" },
        { image: "https://via.placeholder.com/600x400/969696/f00000" },
        { image: "https://via.placeholder.com/600x400/969696/f00000" },
    ];

    return (
        <>
            <main className="contact_form container_2">
                <div className="contact_form--title">
                    <h1 className="font--h1">Contact Us</h1>
                </div>

                <div className="contact_form--details">
                    <div className="details--info">
                        <h2 className="font--h2 info--text">
                            We would love to hear from you! Please fill out the
                            form and we will get back to you.
                        </h2>

                        <ul className="info--company_data">
                            {info.map((i) => (
                                <li
                                    key={i.id}
                                    className="company_data--container"
                                >
                                    <img
                                        src={i.image}
                                        className="company_data--icon"
                                    />
                                    <h4 className="font--h4 company_data--text">
                                        {i.text}
                                    </h4>
                                </li>
                            ))}
                        </ul>

                        <ul className="info--socials">
                            {socials_icon.map((icon, idx) => (
                                <li key={idx} className="socials--container">
                                    <img
                                        src={icon.image}
                                        className="socials--icon"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="details--form">
                        <form>
                            <div className="form--fields">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="fields--input"
                                    name="form--fields[Name]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="fields--input"
                                    name="form--fields[Email]"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="fields--input"
                                    name="form--fields[Subject]"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="fields--textarea"
                                    name="form--fields[Messages]"
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="button-subs"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
