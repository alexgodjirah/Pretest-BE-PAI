import React from "react";
import "../../styles/HomePage/SecondPage/index.css";

export default function SecondPage() {
    return (
        <>
            <main className="second_page container_2">
                <div className="second_page--image"></div>
                <section className="second_page--text">
                    <h2>We Surely Need Integrated Pest and Weed Management</h2>
                    <p>
                        By the year 2020, the global pesticide usage has been
                        estimated to increase up to 3.5 million tons. Although
                        pesticides are beneficial for crop production, using
                        pesticide excessively and continuosly could jeopardize
                        the environment. Various alternatives to reduce
                        pesticide use have emerged, but they still cannot match
                        the same effectiveness and efficiency when using
                        pesticides. We need something that can reduce the use of
                        pesticides while still being effective and efficient in
                        controlling crop plant pests.
                    </p>
                    <button className="button">Learn more</button>
                </section>
            </main>
        </>
    );
}
