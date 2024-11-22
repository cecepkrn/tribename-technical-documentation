
<script setup>
import { 
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection 
} from 'vitepress/theme'

const productOwner = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
];
const tribeLeader = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
];
const developer = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

## TRIBE LEADER
<VPTeamMembers size = "small" :members ="tribeLeader"/>

## SCRUM MASTER

<VPTeamMembers size="small"
    :members="developer"
  />

## PRODUCT OWNER

<VPTeamMembers size="small"
    :members="productOwner"
  />

## SOFTWARE ARCHITECT

<VPTeamMembers size="small"
    :members="developer"
  />

## DOCUMENT ENGINEER

<VPTeamMembers size="small"
    :members="developer"
  />

## DATA ENGINEER

<VPTeamMembers size="small"
    :members="developer"
  />


## DEVELOPER

<VPTeamMembers size="small"
    :members="developer"
  />

## QUALITY ASSURANCE

<VPTeamMembers size="small"
    :members="developer"
  />



