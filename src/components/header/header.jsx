import Logo from "./logo";
import NavMenu from "./navMenu";

const header = () => {
        return (
                <>
                        <header className="fixed w-full bg-darker h-20 flex justify-between content-center px-[10%] z-50 ">
                                <Logo />
                                <NavMenu />
                        </header>
                </>
        );
};

export default header;
