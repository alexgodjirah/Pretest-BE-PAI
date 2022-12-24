import React from "react";
import "../../styles/HomePage/TheConcern/index.css";

export default function TheConcern() {
    return (
        <>
            <main className="the_concern container_2">
                <h1 className="the_concern--title">What We Concern</h1>
                <div className="the_concern--text">
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3 className="font--h3">Health</h3>
                        <p className="font--h4">
                            The effects of long-term exposure to pesticides
                            could cause several severe health problems such as
                            skin irritation, lung damage also heart and kidney
                            failure.
                        </p>
                    </div>
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3 className="font--h3">Environmental</h3>
                        <p className="font--h4">
                            30% of global emissions that cause climate change
                            are caused by agricultural activities, including the
                            use of pesticides.
                        </p>
                    </div>
                    <div className="text--container">
                        <div className="text--icon"></div>
                        <h3 className="font--h3">Cost</h3>
                        <p className="font--h4">
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
