import Footer from "../footer/footer";

const Container = ({ children }) => {
    return (
        <>
            {children}
            <Footer></Footer>
        </>
    )
}
export default Container;