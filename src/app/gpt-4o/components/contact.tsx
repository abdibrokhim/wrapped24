// Component: Contact
export function Contact() {
    return (
      <section className="contact">
        <h2>Contact</h2>
        <p>Get in touch for collaborations or inquiries.</p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }