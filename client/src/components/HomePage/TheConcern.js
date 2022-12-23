import React from "react";
import "../../styles/HomePage/TheConcern/index.css";

export default function TheConcern() {
    return (
        <>
            <main className="third_page container_2">
                <h1 className="third_page--title">What We Concern</h1>
                <div className="third_page--text">
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3>Health</h3>
                        <p>
                            The effects of long-term exposure to pesticides
                            could cause several severe health problems such as
                            skin irritation, lung damage also heart and kidney
                            failure.
                        </p>
                    </div>
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3>Environmental</h3>
                        <p>
                            30% of global emissions that cause climate change
                            are caused by agricultural activities, including the
                            use of pesticides.
                        </p>
                    </div>
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3>Cost</h3>
                        <p>
                            The price of “green label” products in agriculture,
                            which can be an environmentally friendly solution,
                            still has a high price.
                        </p>
                    </div>
                </div>
                <button className="button">Our Impact</button>
            </main>
        </>
    );
}
