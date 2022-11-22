import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const NotFoundView =() => {

    window.top!.document.title = 'Page not found'

    return (
        <>
            <MainMenu />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "900px" }}>
                <div>404 - Page Not Found</div>
            </div>
            <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                <Footer />
            </div>
        </>
    )
}

export default NotFoundView