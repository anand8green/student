import React from "react";
import styles from "../styles";

const Header = ({ data }) => {
    return (
        <header style={styles.headerContainer}>
            <div style={{ display: "flex" }}>
                {/* Logo */}
                <div>
                    <img
                        src={data?.owner.profile_pic_url}
                        style={{
                            marginRight: "10px", height: "50px"
                        }}
                    />
                </div>

                {/* name and address */}
                <div>
                    <p
                        style={{
                            fontWeight: "bold", fontSize: "14px", lineHeight: "5px"
                        }}
                    >
                        {data?.owner.username}
                    </p>
                    <p
                        style={{
                            fontWeight: "thin",
                            fontSize: "12px",
                            lineHeight: "5px",
                            color: "#555",
                        }}
                    >
                        {data?.location.name}
                    </p>
                </div>
            </div>

            <hr
                style={{
                    display: "block",
                    height: 0.01,
                    backgroundColor: "red",
                    opacity: 0.2,
                }}
            />
        </header>
    );
};

export default Header;
