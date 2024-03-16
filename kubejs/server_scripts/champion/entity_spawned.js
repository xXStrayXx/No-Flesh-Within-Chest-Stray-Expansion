EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
    if (Math.random() > 0.05) return
    let randomChampionType = randomGet(championTypeMap)
    entity.persistentData.put('champion', [randomChampionType.type])
    entity.setCustomName([randomChampionType.name, Text.gray('精英')])
    entity.setCustomNameVisible(true)
})


const championTypeMap = [
    {
        type: 'fight_for_death',
        name: Text.darkPurple('死战'),
        desc: Text.gray('攻击时将会为你附加死亡宣告效果')
    },
    {
        type: 'low_frequency',
        name: Text.aqua('低频'),
        desc: Text.gray('受到攻击后有着更长的无敌时间')
    },
    {
        type: 'purify',
        name: Text.aqua('净化'),
        desc: Text.gray('攻击时会净化掉玩家身上所有正面效果')
    }
]