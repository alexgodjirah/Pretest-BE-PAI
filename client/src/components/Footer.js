import React from "react";
import "../styles/Footer/index.css";

export default function Footer() {
    return (
        <>
            <div className="newsletter">
                <h1>
                    Let's <b>Create sustainable agriculture</b> Together!
                </h1>

                <form className="newsletter--input">
                    <input placeholder="Email" type="email" className="input" />
                    <button className="button-subs">Subscribe</button>
                </form>
            </div>

            <footer className="footer container">
                <div className="footer--columns">
                    <div className="footer--container">
                        <h3>Logo</h3>
                        <div>
                            <h3>Follow Us</h3>
                            <ul className="footer--items_list">
                                <li className="footer--icon"></li>
                                <li className="footer--icon"></li>
                                <li className="footer--icon"></li>
                                <li className="footer--icon"></li>
                                <li className="footer--icon"></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer--container">
                        <h3>Contact Us</h3>
                        <ul className="footer--items_list">
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--p">
                                    Jl. Raya Benelanlor, Krajan, Kabat,
                                    Banyuwangi - Jawa Timur 68461
                                </p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--p">(0333)6370737</p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--p">(+62)8111077141</p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--p">info@pandawaid.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Product</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Weed Solut-ion
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Pest Solut-ion
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Envros
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Impact</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Outline Impact
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Measurement
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Impact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Company</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Career
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Contact
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Product
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Sector
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--p" href="#">
                                    Task
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer--footer">
                    <p>Copyright &#169; 2021 Pandawa Agri Indonesia</p>
                </div>
            </footer>
        </>
    );
}
