import React from 'react';
import styled from 'styled-components';
import balanceImg from '../assets/balancesheet.jpg'; 
import ledgerImg from '../assets/ledger.jpg'; // Add image path
import todoImg from '../assets/todo-list.jpg'

const Home = () => (
  <HomeContainer>
    <Content>
      <h1 className="animate">Welcome to the Financial App</h1>
      <Section>
        <h2>Why Choose Us?</h2>
        <p className="animate">
          We provide a comprehensive suite of tools designed to help you manage your finances and tasks efficiently. Our application includes:
        </p>
        <FeaturesGrid>
          <Feature>
            <img src={balanceImg} alt="Balance Sheets" />
            <h3>Balance Sheets</h3>
            <p>Accurate financial tracking</p>
          </Feature>
          <Feature>
            <img src={ledgerImg} alt="Ledgers" />
            <h3>Ledgers</h3>
            <p>Detailed record-keeping</p>
          </Feature>
          <Feature>
            <img src={todoImg} alt="To-Do List" />
            <h3>To-Do Lists</h3>
            <p>Managing your tasks and reminders</p>
          </Feature>
        </FeaturesGrid>
      </Section>
      <Section>
        <h2>Features</h2>
        <p className="animate">
          Our Financial App comes with a range of features to streamline your financial management:
        </p>
        <ol>
          <li>Intuitive and user-friendly interface</li>
          <li>Real-time updates and calculations</li>
          <li>Customizable templates and reports</li>
          <li>Secure data storage and backup</li>
        </ol>
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
          <li>Email: Shrehan2301@gmail.com</li>
          <li>Phone: +91 9477614421</li>
          {/* <li>Social Media: Follow us on Twitter, Facebook, and LinkedIn</li> */}
        </ul>
      </Section>
      <Footer>
        <p>Made by a noob developer with a CA friend</p>
        <p>Gmail: Shrehan2301@gmail.com | GitHub: shrehan1234</p>
      </Footer>
    </Content>
  </HomeContainer>
);

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(245, 247, 250, 0.8));
  padding: 2rem;
`;

const Content = styled.div`
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

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

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Feature = styled.div`
  flex: 1 1 200px;
  max-width: 300px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  p {
    margin: 0.5rem 0;
  }
`;

export default Home;
