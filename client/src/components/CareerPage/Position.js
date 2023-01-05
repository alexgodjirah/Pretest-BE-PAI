import React from "react";
import "../../styles/CareerPage/Position/index.css";

export default function Position() {
    const jobs = [
        {
            id: 1,
            title: "Back-End Web Developer (Kalimantan Timur)",
            category: "Programmer",
            type: "Full-Time",
            location: "Banyuwangi",
        },
        {
            id: 2,
            title: "Graphic Designer",
            category: "Creative Strategist",
            type: "Paid Internship",
            location: "Banyuwangi",
        },
        {
            id: 3,
            title: "Finance Field",
            category: "Finance",
            type: "Full-Time",
            location: "Nusa Tenggara Timur",
        },
        {
            id: 4,
            title: "Front-End Web Developer",
            category: "Programmer",
            type: "Full-Time",
            location: "Banyuwangi",
        },
        {
            id: 5,
            title: "Front-End Web Developer",
            category: "Programmer",
            type: "Full-Time",
            location: "Banyuwangi",
        },
        {
            id: 6,
            title: "Front-End Web Developer",
            category: "Programmer",
            type: "Full-Time",
            location: "Banyuwangi",
        },
        {
            id: 7,
            title: "Front-End Web Developer",
            category: "Programmer",
            type: "Full-Time",
            location: "Banyuwangi",
        },
    ];

    return (
        <>
            <main className="position container_2">
                <div className="position--title">
                    <h1 className="font--h1">Our Available Position</h1>
                    <div className="line"></div>
                </div>

                <div className="position--list">
                    <form>
                        <div className="list--filter">
                            <div className="filter--ops">
                                <div className="search--ops">
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        className="search--ops-input"
                                    />
                                    <button className="search--ops-button">
                                        &#x1F50D;&#xFE0E;
                                    </button>
                                </div>
                            </div>

                            <div className="filter--ops">
                                <select className="select--ops">
                                    <option>All Job Category</option>
                                    <option>Creative Strategist</option>
                                    <option>Field Customer Success</option>
                                    <option>Finance</option>
                                </select>
                            </div>

                            <div className="filter--ops">
                                <select className="select--ops">
                                    <option>All Job Type</option>
                                    <option>Full-Time</option>
                                    <option>Paid Intership</option>
                                </select>
                            </div>

                            <div className="filter--ops">
                                <select className="select--ops">
                                    <option>All Job Location</option>
                                    <option>Banyuwangi</option>
                                    <option>Central Kalimantan</option>
                                    <option>East Kalimantan</option>
                                    <option>Nusa Tenggara Timur</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className="list--jobs">
                        {jobs.map((job) => (
                            <div key={job.id} className="jobs--card">
                                <div className="jobs--card-container">
                                    <h2 className="font--h3">{job.title}</h2>

                                    <ul className="job--detail">
                                        <li className="detail--item">
                                            <img
                                                src="https://via.placeholder.com/600x400/969696/f00000"
                                                className="detail--icon"
                                            />
                                            <p className="font--p">
                                                {job.category}
                                            </p>
                                        </li>
                                        <li className="detail--item">
                                            <img
                                                src="https://via.placeholder.com/600x400/969696/f00000"
                                                className="detail--icon"
                                            />
                                            <p className="font--p">
                                                {job.type}
                                            </p>
                                        </li>
                                        <li className="detail--item">
                                            <img
                                                src="https://via.placeholder.com/600x400/969696/f00000"
                                                className="detail--icon"
                                            />
                                            <p className="font--p">
                                                {job.location}
                                            </p>
                                        </li>
                                    </ul>

                                    <a
                                        href="#"
                                        className="font--p animation-pulse"
                                    >
                                        More Detail &#8594;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
