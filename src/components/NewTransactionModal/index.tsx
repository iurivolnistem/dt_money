import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import CloseIcon from '../../assets/close.svg';
import IncomeIcon from '../../assets/income.svg'
import OutcomeIcon from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './style';

interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTrasactionModalProps){
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const { createTransaction } = useTransactions();
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        });

        onRequestClose();
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
    }
    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            className="react-modal-content"
            overlayClassName="react-modal-overlay">
                <button className="close-react-modal" onClick={onRequestClose}>
                    <img src={CloseIcon} alt="Fechar modal" />
                </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioBox 
                        isActive={type === 'deposit'} 
                        onClick={() => setType('deposit')} 
                        type="button"
                        colorBox="green"
                        >

                        <img src={IncomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        isActive={type === 'withdraw'} 
                        onClick={() => setType('withdraw')} 
                        type="button"
                        colorBox="red"
                        >

                        <img src={OutcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    );
}