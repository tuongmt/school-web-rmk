import NavBar from "@/components/header/navbar"
import TopNav from "@/components/header/top-nav"

export default function Header() {
    return (
        <>
            <TopNav />
            <div className="sticky top-0 z-50 shadow-xl">
                <NavBar />
            </div>
        </>
    )
}
