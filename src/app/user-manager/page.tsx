'use client'
import { SetStateAction, useState } from 'react'

const users = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@email.com',
    requestDate: '2024-11-15',
    status: 'pending',
    company: 'Tech Solutions',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    requestDate: '2024-11-18',
    status: 'paid',
    company: 'Digital Systems',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    requestDate: '2024-11-17',
    status: 'paid',
    company: 'Cloud Services',
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    requestDate: '2024-11-19',
    status: 'pending',
    company: 'Data Corp',
  },
  {
    id: 5,
    name: 'Lucas Mendes',
    email: 'lucas.mendes@email.com',
    requestDate: '2024-11-16',
    status: 'pending',
    company: 'Software Ltd',
  },
]

export default function UserManager() {
  const [filterDatesTo, setFilterDatesTo] = useState('')
  const [orderedUsers, setOrderedUsers] = useState(users)

  function handleFilterDates() {
    if (filterDatesTo === 'todayToPast') {
      setOrderedUsers(
        // Eu coloco o ... pois assim eu uso a última forma do users para fazer o sort
        [...users].sort(
          (a, b) =>
            new Date(a.requestDate).getTime() -
            new Date(b.requestDate).getTime(),
        ),
      )
      setFilterDatesTo('pastToToday')
    } else {
      setOrderedUsers(
        [...users].sort(
          (a, b) =>
            new Date(b.requestDate).getTime() -
            new Date(a.requestDate).getTime(),
        ),
      )
      setFilterDatesTo('todayToPast')
    }
  }

  function handleFilterStatus(event: {
    target: { value: SetStateAction<string> }
  }) {
    const selectedValue = event.target.value
    filterStatusOnTable(selectedValue)
  }

  function filterStatusOnTable(selectedValue: SetStateAction<string>) {
    if (selectedValue === 'pending') {
      setOrderedUsers([...users].filter((user) => user.status === 'paid'))
    }
    if (selectedValue === 'paid') {
      setOrderedUsers([...users].filter((user) => user.status === 'pending'))
    }
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-10">
        <label className="flex items-center gap-2">
          Filtrar:
          <select
            onChange={handleFilterStatus}
            id="selectBox"
            className="flex gap-2 border p-1 rounded-md h-full w-fit"
          >
            <option value=""></option>
            <option value="pending">Pendente</option>
            <option value="paid">Pago</option>
          </select>
        </label>
        <button
          className="flex gap-2 border p-1 rounded-md w-fit"
          onClick={handleFilterDates}
        >
          Ordenar{' '}
          {filterDatesTo === 'todayToPast' ? '(Mais novos)' : '(Mais antigos)'}
        </button>
      </div>

      <table>
        <thead>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Request Date</th>
          <th>Status</th>
          <th>Company</th>
        </thead>
        <tbody>
          {orderedUsers.map((user) => {
            return (
              <tr className="border-b-1 border" key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.requestDate}</td>
                <td>{user.status}</td>
                <td>{user.company}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
