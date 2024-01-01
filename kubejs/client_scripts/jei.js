JEIEvents.information(event => {
    event.addItem('kubejs:candy_pancreas', Text.black('在与无名巫师的战斗中有20%概率掉落'))
    event.addItem('kubejs:fire_gem', Text.black('击败烈焰狂战士后80%概率掉落，可以用于制作各种烈焰相关的器官'))
    event.addItem('kubejs:magic_spine', Text.black('2%的概率在击败女巫后掉落'))
    event.addItem('kubejs:magic_vision', Text.black('在与水人的战斗中有20%的概率掉落'))
    
    event.addItem(Ingredient.of('#kubejs:evolution'), [Text.black('所有被标记'), Text.green('进化'), Text.black('的器官，可以在未来的路途中通过各种方式进行进化。\n一部分可以通过'), Text.darkPurple('器官护符'), Text.black('在某些特定条件下进化。\n一部分则是可以通过各种各样的配方进行强化。\n更有一部分，只有在装备它的情况下，击杀Boss才能够得到额外的掉落物。')])
    event.addItem('kubejs:magic_vision', Text.black('在与水人的战斗中有20%的概率掉落'))
    event.addItem('kubejs:lucky_cookie_organ', Text.black('食用幸运饼干时有3%概率获得'))
    event.addItem('kubejs:unholy_grail', Text.black('你可以在古代城市的箱子中寻找到它'))
})