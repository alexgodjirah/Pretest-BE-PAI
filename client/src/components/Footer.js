import React from "react";
import "../styles/footer/index.css";

export default function Footer() {
    return (
        <>
            <footer className="footer">
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
                                <p className="font--paragraph">
                                    Jl. Raya Benelanlor, Krajan, Kabat,
                                    Banyuwangi - Jawa Timur 68461
                                </p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--paragraph">(0333)6370737</p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--paragraph">
                                    (+62)8111077141
                                </p>
                            </li>
                            <li className="items_list--content">
                                <div className="footer--icon"></div>
                                <p className="font--paragraph">
                                    info@pandawaid.com
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Product</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Weed Solut-ion
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Pest Solut-ion
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Envros
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Impact</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Outline Impact
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Measurement
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Impact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container">
                        <h3>Company</h3>
                        <ul className="footer--item_list">
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Career
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Contact
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Product
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
                                    Sector
                                </a>
                            </li>
                            <li className="items_list--content">
                                <a className="font--paragraph" href="#">
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
