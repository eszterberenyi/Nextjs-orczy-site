export const menuItems = [
    { name: 'EN', link: 'en' },
    { name: 'RÓLUNK', link: 'about' },
    {
        name: 'FOGLALKOZÁSOK', link: 'workshops', dropdown: [
            {
                name: 'AKTUÁLIS', link: 'current'
            },
            {
                name: 'ARCHÍV', link: 'archive'
            }
        ],
    },
    { name: 'TÉRKÉP', link: 'map' },
    { name: 'KUTATÁS', link: 'research' },
    { name: 'KIÁLLÍTÁS', link: 'exhibition' },
    { name: 'MÉDIA', link: 'media' }
]