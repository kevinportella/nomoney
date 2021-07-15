import { Container, Content } from './styles'
import { useState } from 'react'
import Modal from 'react-modal'

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {

  return(
    <Container>
      <Content>

        <img src={logoImg} alt="kbmoney"/>

        <button
        type="button"
        onClick={onOpenNewTransactionModal}
        >
        Nova Transação
        </button>

      </Content>
    </Container>
  )
}
