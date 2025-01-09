import React from 'react';
import styled, { keyframes } from 'styled-components';

const AppContainer = styled.div`
  background: linear-gradient(150deg, #1a1a1a 0%, #0a0a0a 40%, #000000 100%);
  min-height: 100vh;
  padding: 2rem 4rem;
  color: white;
  position: relative;
  font-family: 'Inter', sans-serif;
  overflow-y: auto;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(40, 40, 40, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(40, 40, 40, 0.2) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
  }
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;
  padding-left: 4rem;
`;

const LeftSection = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ComingSoonTag = styled.div`
  display: inline-flex;
  padding: 0.75rem 1rem;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.1;
  font-weight: normal;
  letter-spacing: -1px;
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const PromptsContainer = styled.div`
  position: relative;
  height: 340px;
  overflow: hidden;
  width: 100%;
  margin-top: 2rem;
`;

const PromptsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  position: absolute;
  width: 100%;
  animation: ${scrollAnimation} 160s linear infinite;
  transform: translateY(0);
`;

const Prompt = styled.div`
  background: rgba(18, 18, 18, 0.95);
  padding: 0.7rem 1rem;
  min-height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: fit-content;
  max-width: 100%;
`;

const Icon = styled.span<{ color: string }>`
  font-size: 18px;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
`;

const ChatSection = styled.div`
  margin-top: 4rem;
  padding: 0 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChatWindow = styled.div`
  background: rgba(18, 18, 18, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 4rem;
`;

const XLogo = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(25, 25, 25, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 0.5rem;

  .window-controls {
    display: flex;
    gap: 0.375rem;
    margin-right: 1rem;
    
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  span.title {
    opacity: 0.8;
    font-size: 0.95rem;
  }
`;

const ChatContent = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ChatSidebar = styled.div`
  width: 240px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;

  .logo-container {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const ChatActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    text-align: left;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: white;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ChatMain = styled.div`
  display: flex;
  height: 600px;
`;

const CreateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0.9;
  }
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const ActionButton = styled.button`
  background: rgba(25, 25, 25, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(35, 35, 35, 0.95);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const MessageInput = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(18, 18, 18, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.5;

  .input-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(25, 25, 25, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0.75rem;

    input {
      flex: 1;
      background: none;
      border: none;
      color: white;
      font-size: 0.95rem;
      outline: none;
      font-family: inherit;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    button {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      
      &:hover {
        color: white;
      }
    }
  }
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ComingSoonBadge = styled.div`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    opacity: 0.6;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialButton = styled.button`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .icon {
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }

  &:hover {
    background: linear-gradient(135deg, #323232 0%, #222222 50%, #121212 100%);
    transform: translateY(-2px);
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .label {
    color: rgba(255, 255, 255, 0.6);
  }

  .value {
    color: rgba(255, 255, 255, 0.9);
    font-family: monospace;
    font-size: 0.9rem;
  }
`;

const ContractInfoSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  padding: 0 4rem;
`;

const ContractInfo = styled.div`
  background: rgba(18, 18, 18, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
`;

const FeaturesSection = styled.div`
  padding: 8rem 4rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeatureCard = styled.div`
  background: rgba(18, 18, 18, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-play-state: paused;

  &.visible {
    animation-play-state: running;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  .icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const featureIcons = {
  mobile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  ),
  api: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M12 6v12M8 8v8M16 8v8" />
    </svg>
  ),
  chain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

const TopLeftLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }

  span {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
  }
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
`;

const ComingSoonButton = styled.button`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

function App() {
  const prompts = [
    { text: "What address deployed this coin?", color: "#8B5CF6" },
    { text: "Is this coin bundled?", color: "#F59E0B" },
    { text: "Check PNL of this wallet", color: "#059669" },
    { text: "Scan this coin for me", color: "#3B82F6" },
    { text: "Where should I bid this coin?", color: "#EC4899" },
    { text: "Show me recent whale moves", color: "#8B5CF6" },
    { text: "Calculate potential returns", color: "#F59E0B" },
    { text: "Analyze trading patterns", color: "#059669" }
  ];

  const duplicatedPrompts = [
    ...prompts, ...prompts, ...prompts, ...prompts,
    ...prompts, ...prompts, ...prompts, ...prompts,
    ...prompts, ...prompts, ...prompts, ...prompts
  ];

  const featuresRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.feature-card').forEach(card => {
              card.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AppContainer>
      <TopNav>
        <TopLeftLogo>
          <img src="/projectlogo.png" alt="Converse AI" />
          <span>Converse AI</span>
        </TopLeftLogo>
        <ComingSoonButton>Coming soon</ComingSoonButton>
      </TopNav>
      <MainContent>
        <LeftSection>
          <div>
            <ComingSoonTag>
              <span>Converse AI</span>
              <span style={{ opacity: 0.5, marginLeft: '0.5rem' }}>coming soon</span>
            </ComingSoonTag>
            <Title>
              Blockchain intelligence &<br />
              AI trench tools.
            </Title>
          </div>
          <SocialButtons>
            <SocialButton>
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </SocialButton>
            <SocialButton>
              <img 
                src="/pflogo.png" 
                alt="Pump.Fun" 
                className="icon" 
                style={{ width: '20px', height: '20px' }} 
              />
              Pump.Fun
            </SocialButton>
          </SocialButtons>
        </LeftSection>
        <PromptsContainer>
          <PromptsSection>
            {duplicatedPrompts.map((prompt, index) => (
              <Prompt key={`${prompt.text}-${index}`}>
                <Icon color={prompt.color}>✦</Icon>
                {prompt.text}
              </Prompt>
            ))}
          </PromptsSection>
        </PromptsContainer>
      </MainContent>

      <ContractInfoSection>
        <ContractInfo>
          <InfoRow>
            <span className="label">CA:</span>
            <span className="value">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
          </InfoRow>
          <InfoRow>
            <span className="label">Dev Supply:</span>
            <span className="value">5%</span>
          </InfoRow>
          <InfoRow>
            <span className="label">Ticker:</span>
            <span className="value">$CVERSE</span>
          </InfoRow>
        </ContractInfo>
      </ContractInfoSection>

      <FeaturesSection ref={featuresRef}>
        <FeatureCard className="feature-card">
          <div className="icon">{featureIcons.mobile}</div>
          <h3>Mobile Dashboard</h3>
          <p>Carry Converse AI in your pocket and stay connected to real-time blockchain insights, agent performance, and market alerts on the go.</p>
        </FeatureCard>
        <FeatureCard className="feature-card">
          <div className="icon">{featureIcons.api}</div>
          <h3>Converse API</h3>
          <p>Seamlessly integrate Converse AI agents into your dApps and platforms. Access real-time data and automate blockchain interactions with ease.</p>
        </FeatureCard>
        <FeatureCard className="feature-card">
          <div className="icon">{featureIcons.chain}</div>
          <h3>Cross-Chain Compatibility</h3>
          <p>Run services between chains—deploy and manage agents across multiple blockchains, including Solana, Ethereum, and BSC, effortlessly.</p>
        </FeatureCard>
      </FeaturesSection>

      <ChatSection>
        <SectionTitle>
          <h2>AI Conversation Partner</h2>
          <p>Free, GPT-4 powered alternative to ChatGPT, supercharging its items for blockchain based conversation.</p>
        </SectionTitle>
        <ChatWindow>
          <ChatHeader>
            <div className="window-controls">
              <span />
              <span />
              <span />
            </div>
            <span className="title">Chat with Agent</span>
          </ChatHeader>
          <ChatMain>
            <ChatSidebar>
              <div className="logo-container">
                <XLogo src="/projectlogo.png" alt="Converse AI" />
                <span>Converse AI</span>
              </div>
              <ChatActions>
                <button>+ New chat</button>
                <button>Chat with Agent</button>
              </ChatActions>
            </ChatSidebar>
            <ChatContent>
              <CreateSection>
                <h3>Create with AI</h3>
                <ActionButtons>
                  <ActionButton disabled>
                    <div className="icon">+</div>
                    Create New Agent
                  </ActionButton>
                  <ActionButton disabled>
                    <div className="icon">💬</div>
                    Start Chat Room
                  </ActionButton>
                  <ActionButton disabled>
                    <div className="icon">📁</div>
                    Upload File
                  </ActionButton>
                </ActionButtons>
              </CreateSection>
              <MessageInput>
                <div className="input-container">
                  <input 
                    type="text" 
                    placeholder="Coming Soon..." 
                    disabled 
                  />
                  <button disabled>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M15 1L7.5 8.5M15 1L10 15L7.5 8.5M15 1L1 6L7.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </MessageInput>
              <ComingSoonOverlay>
                <ComingSoonBadge>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Coming Soon
                </ComingSoonBadge>
              </ComingSoonOverlay>
            </ChatContent>
          </ChatMain>
        </ChatWindow>
      </ChatSection>
    </AppContainer>
  );
}

export default App;
