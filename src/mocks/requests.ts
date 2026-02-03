export type Request = {
    id: number
    title: string
    status: 'all' | 'inProgress' | 'done'
    category: string
}

export const requests: Request[] = [
    {id: 1, title: 'Заявка 1', status: 'all', category: 'Категория A'},
    {id: 2, title: 'Заявка 2', status: 'inProgress', category: 'Категория B'},
    {id: 3, title: 'Заявка 3', status: 'done', category: 'Категория C'},
]
