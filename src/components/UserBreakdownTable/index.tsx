import { User } from '@/app/user-manager/page'

export default function UserBreakdownTable({
  orderedUsers,
}: {
  orderedUsers: User[]
}) {
  return (
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
  )
}
