import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  letter-spacing: initial;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 24px 0;
`;

export const Mail = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};
  text-decoration: none;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.05em;
`;

export const Description = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 140%;
  margin: 24px 0 0 0;
  color: ${({ theme }) => theme.color.textPrimary};
`;