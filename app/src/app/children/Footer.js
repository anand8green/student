import React, { useEffect, useState } from "react";
import styles from "../styles";
import LikeUnlikeButtons from "./like_button/LikeUnlikeButtons";

const Footer = ({ data }) => {
    // Adding comma to likes
    const [count, setCount] = useState(data.edge_media_preview_like.count);

    // Increasing Likes Count
    const [like, setLike] = useState(false);

    useEffect(() => {
        like
            ? setCount(data.edge_media_preview_like.count + 1)
            : setCount(data.edge_media_preview_like.count);
    }, [like]);

    const handleClick = () => {
        setLike(!like);
    };

    // Adding Comma
    const numberWithCommas = (count) => {
        return count?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <footer style={styles.footerContainer}>

            {/* Likes Text */}
            <div>
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        lineHeight: "5px",
                    }}
                >
                    {numberWithCommas(count)} likes
                </p>
                <p
                    style={{
                        fontWeight: "thin",
                        fontSize: "10px",
                        lineHeight: "5px",
                        color: "gray",
                    }}
                >
                    4 DAYS AGO
                </p>
            </div>
            {/* Likes Icon */}
            <div onClick={handleClick}>
                <LikeUnlikeButtons size={28} />
            </div>
        </footer>
    );
};

export default Footer;
