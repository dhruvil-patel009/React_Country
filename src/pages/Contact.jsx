export const Contact = () => {


    const handleFormSubmit = (formData) => {
        // console.log(formData.entries())
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData)
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">

                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        required
                        autoComplete="false"
                        placeholder="Enter Your Name"
                    />
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        autoComplete="false"
                        placeholder="Enter Your Email"
                    />

                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Enter Your Message"
                        name="message"
                        required
                        autoComplete="false"
                    ></textarea>

                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    );
};
