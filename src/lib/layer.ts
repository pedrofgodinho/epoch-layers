import type { Rule } from "./filter";

export class Layer {
    name: string;
    description?: string;
    simpleRules: Rule[];
    variableRules: Variable<any>[];

    public constructor(name: string, description?: string) {
        this.name = name;
        this.description = description;
        this.simpleRules = [];
        this.variableRules = [];
    }

    public getRules(): Rule[] {
        const rules: Rule[] = [];
        for (const rule of this.simpleRules) {
            rules.push(rule);
        }
        for (const variable of this.variableRules) {
            for (const rule of variable.rules) {
                const updatedRule = variable.updater(rule);
                rules.push(updatedRule);
            }
        }

        return rules;
    }
}

export interface Variable<T> {
    name: string;
    value: T;
    rules: Partial<Rule>[];
    updater: (rule: Partial<Rule>) => Rule;
}

