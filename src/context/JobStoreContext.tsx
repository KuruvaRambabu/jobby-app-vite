import { createContext } from 'react'
import JobsStore from '../stores/JobStore'

const JobStoreContext = createContext<JobsStore | null>(null)

