const Contacts = () => {
    return (
        <div className="p-6 text-center">
            {/* Page Title */}
            <h1 className="text-3xl font-extrabold mb-2 text-green-600 transition duration-300 hover:scale-105">
                📞 Contacts Page
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">
                You reached by routing to <span className="font-mono text-black">"/contacts"</span>!!
            </h2>

            {/* Contact Form */}
            <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <div>
                    <label className="block text-left text-gray-700 font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block text-left text-gray-700 font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block text-left text-gray-700 font-semibold mb-1">Message</label>
                    <textarea
                        rows="4"
                        placeholder="Write your message here..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contacts;