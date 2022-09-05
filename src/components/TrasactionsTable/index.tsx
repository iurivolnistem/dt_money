import { transitions } from 'polished';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './style';


export function TransactionsTable(){
    const { transactions } = useTransactions();
    return(
        <Container>
            { transactions.length == 0 ? 
             <p className="notransaction">Nenhuma transação cadastrada</p>
            :
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-br')
                            .format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </Container>
    );
}