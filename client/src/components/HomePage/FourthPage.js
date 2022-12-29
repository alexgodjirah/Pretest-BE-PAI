import React from "react";
import "../../styles/HomePage/FourthPage/index.css";

export default function FourthPage() {
    return (
        <>
            <main className="fourth_page container_2">
                <div className="fourth_page--image"></div>
                <section className="fourth_page--text">
                    <h2 className="font--h2">
                        The Solut-ion "Pesticides Reductant"
                    </h2>
                    <p className="font--p">
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
                    <div>
                        <button className="button">Our Product</button>
                    </div>
                </section>
            </main>
        </>
    );
}
