"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Contenedor del modal flotante
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Cuadro de mensaje
const Modal = styled.div`
  background: white;
  max-width: 400px;
  width: 90%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

// Botón
const Button = styled.button`
  margin-top: 16px;
  padding: 10px 24px;
  background-color: #1f2937;
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #111827;
  }
`;

export default function TestPage() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seenTestNotice");
    if (!seen) {
      setShowNotice(true);
    }
  }, []);

  const dismissNotice = () => {
    localStorage.setItem("seenTestNotice", "true");
    setShowNotice(false);
  };

  return (
    <>
      {showNotice && (
        <Overlay>
          <Modal>
            <p style={{ fontSize: "18px", marginBottom: "16px" }}>
              ⚠️ Esta es una <strong>página de prueba</strong>. La información
              mostrada no es real.
            </p>
            <Button onClick={dismissNotice}>Entendido</Button>
          </Modal>
        </Overlay>
      )}
    </>
  );
}
