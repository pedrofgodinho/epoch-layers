
export interface Filter {
    name: string;
    filterIcon: number;
    filterIconColor: number;
    description?: string;
    lastModifiedInVersion: string;
    lootFilterVersion: number;
    rules: Rule[];
}

export interface Rule {
    type: 'SHOW' | 'HIDE' | 'HIGHLIGHT';
    conditions: (ClassCondition | FactionCondition | LevelCondition | RarityCondition | SubtypeCondition | AffixCondition)[];
    color: number;
    isEnabled: boolean;
    levelDependent: boolean;
    minLvl: number;
    maxLvl: number;
    emphasized: boolean;
    nameOverride?: string;
}

export interface ClassCondition {
    req: Set<('Primalist' | 'Mage' | 'Sentinel' | 'Acolyte' | 'Rogue')>;
}

export interface FactionCondition {
    faction: Set<('MerchantsGuild' | 'CircleOfFortune')>;
}

export interface LevelCondition {
    type: 'BELOW_LEVEL' | 'ABOVE_LEVEL' | 'MAX_LVL_BELOW_CHARACTER_LEVEL' | 'HIGHEST_USABLE_LEVEL';
    level: number;
}

export interface RarityCondition {
    rarity: Set<('NORMAL' | 'MAGIC' | 'RARE' | 'EXALTED' | 'UNIQUE' | 'LEGENDARY' | 'SET')>;
    minLegendaryPotential?: number;
    maxLegendaryPotential?: number;
    minWeaversWill?: number;
    maxWeaversWill?: number;
}

export interface SubtypeCondition {
    equipmentType: Set<(
        'ONE_HANDED_AXE' | 'ONE_HANDED_MACES' | 'ONE_HANDED_SCEPTRE' | 'ONE_HANDED_SWORD' | 'ONE_HANDED_DAGGER' |
        'WAND' | 'CATALYST' |
        'TWO_HANDED_AXE' | 'TWO_HANDED_MACE' | 'TWO_HANDED_SPEAR' | 'TWO_HANDED_STAFF' | 'TWO_HANDED_SWORD' |
        'BOW' | 'QUIVER' |
        'SHIELD' |
        'HELMET' | 'BODY_ARMOR' | 'BELT' | 'BOOTS' | 'GLOVES' | 'AMULET' | 'RING' | 'RELIC' |
        'IDOL_1X1_ETERRA' | 'IDOL_1X2_ETERRA' | 'IDOL_2x1' | 'IDOL_1x2' | 'IDOL_3x1' | 'IDOL_1x3' | 'IDOL_4x1' | 'IDOL_1x4' | 'IDOL_2x2'
    )>;
    subTypes?: Set<number>;
}

export interface AffixCondition {
    affixes: Set<number>;
    comparison: 'ANY' | 'EQUAL' | 'LESS' | 'LESS_OR_EQUAL' | 'MORE' | 'MORE_OR_EQUAL';
    comparisonValue: number;
    minOnSameItem: number;
    combinedComparison: 'ANY' | 'EQUAL' | 'LESS' | 'LESS_OR_EQUAL' | 'MORE' | 'MORE_OR_EQUAL';
    combinedComparisonValue: number;
    advanced: boolean;
}