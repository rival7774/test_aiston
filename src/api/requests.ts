import {requests} from '../mocks/requests'
import type {Request} from '../mocks/requests'

export const getRequests = (): Promise<Request[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(requests), 500) // имитация задержки запроса
    })
}
