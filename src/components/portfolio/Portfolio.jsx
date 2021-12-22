import React from "react";
import "./Portfolio.css";
import * as Isotope from "isotope-layout";

const Portfolio = () => {
    const filterBtn = document.querySelectorAll(".filter-btn");

    filterBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            filterBtn.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");
        })
    );
    const isotope = React.useRef();
    const [filterKey, setFilterKey] = React.useState("*");
    React.useEffect(() => {
        isotope.current = new Isotope(".grid", {
            itemSelector: ".grid-items",
            layoutMode: "fitRows",
        });
        return () => isotope.current.destroy();
    }, []);
    React.useEffect(() => {
        filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);


    return (
        <div class="portfolio section" id="projects">
            <div class="container">
                <div class="section-header">
                    <h3 class="title">Projects</h3>
                    <p class="text">
                        Here are all the projects had I have worked on. <br /> I
                        keep adding new projects when I finish them
                    </p>
                </div>

                <div class="placeholder">
                    <p class="text">
                        Sorry! Nothing to show here yet. Projects will be added
                        as I complete them very soon!
                    </p>
                </div>

                <div class="section-body">
                    <div class="filter">
                        <button
                            class="filter-btn active"
                            data-filter=".front"
                            onClick={handleFilterKeyChange("*")}
                        >
                            All
                        </button>
                        <button
                            class="filter-btn"
                            data-filter=".full"
                            onClick={handleFilterKeyChange("front")}
                        >
                            Featured
                        </button>
                        {/* <button
                            class="filter-btn"
                            data-filter=".graphic"
                            onClick={handleFilterKeyChange("full")}
                        >
                            Graphic Design
                        </button> */}
                    </div>

                    <div class="grid">
                        <div class="grid-items graphic">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items full">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items graphic full front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items full">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items graphic front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items full front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                        <div class="grid-items front">
                            <div class="gallery-image">
                                <h2>Project</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio
