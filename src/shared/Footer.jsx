
const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-15 py-16">
            <div className="footer container mx-auto px-6 grid grid-cols-3 lg:grid-cols-none">
                <aside className="col-span-3">
                    <h2 className="font-extrabold text-4xl mb-4">BookShop</h2>
                    <p className="text-xl font-medium">Online Books Shop<br />Providing reliable tech since 2007</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;