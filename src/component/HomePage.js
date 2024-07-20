import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <HomeContainer>
    <Content>
      <h1 className="animate">Welcome to the Financial App</h1>
      <Section>
        <h2>Why Choose Us?</h2>
        <p className="animate">
          We provide a comprehensive suite of tools designed to help you manage your finances and tasks efficiently. Our application includes:
        </p>
        <ul>
          <li>Balance Sheets for accurate financial tracking</li>
          <li>Ledgers for detailed record-keeping</li>
          <li>To-Do Lists for managing your tasks and reminders</li>
        </ul>
      </Section>
      <Section>
        <h2>Features</h2>
        <p className="animate">
          Our Financial App comes with a range of features to streamline your financial management:
        </p>
        <ul>
          <li>Intuitive and user-friendly interface</li>
          <li>Real-time updates and calculations</li>
          <li>Customizable templates and reports</li>
          <li>Secure data storage and backup</li>
        </ul>
      </Section>
      <Section>
        <h2>How It Works</h2>
        <p className="animate">
          Getting started with our app is easy. Follow these simple steps:
        </p>
        <ol>
          <li>Sign up or log in to your account</li>
          <li>Choose the tool you want to use: Balance Sheet, Ledger, or To-Do List</li>
          <li>Input your data and save your entries</li>
          <li>Generate reports and track your progress</li>
        </ol>
      </Section>
      <Section>
        <h2>Contact Us</h2>
        <p className="animate">
          We value your feedback and are here to help you. Reach out to us via:
        </p>
        <ul>
          <li>Email: support@financialapp.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Social Media: Follow us on Twitter, Facebook, and LinkedIn</li>
        </ul>
      </Section>
      <Footer>
        Made by a noob developer with a CA friend
      </Footer>
    </Content>
  </HomeContainer>
);

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(245, 247, 250, 0.8));
`;

const Content = styled.div`
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #333;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul, ol {
    text-align: left;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    max-width: 600px;
  }

  ul li, ol li {
    margin-bottom: 0.5rem;
  }

  ol {
    list-style-type: decimal;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: #333;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export default Home;
