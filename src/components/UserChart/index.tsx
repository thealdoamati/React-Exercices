import { User } from '@/app/user-manager/page'

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export default function UserChart({ orderedUsers }: { orderedUsers: User[] }) {
  console.log('orderedUsers', orderedUsers)

  const orderUsersSmaller = orderedUsers.map(({ requestDate, company }) => ({
    requestDate,
    company,
  }))

  console.log('orderUsersSmaller', orderUsersSmaller)

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
