import { atom, selector } from 'recoil';

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 100
})

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const totalCount = selector({
    key:"totalCount",
    get:({get}) => {
        const notificationAtomCount = get(notificationAtom)
        const jobAtomCount = get(jobAtom)
        const messagingAtomCount = get(messagingAtom)
        const networkAtomCount = get(networkAtom)

        return notificationAtomCount + jobAtomCount + messagingAtomCount + networkAtomCount
    }
})