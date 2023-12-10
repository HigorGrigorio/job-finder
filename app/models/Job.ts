/**
 * @file Job.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create Job.ts.
 */
import {CompanyModel} from "./Company";
import {SkillModel} from "./Skill";
import {JobCategoryModel} from "./JobCategory";

export interface JobModel {
    id: number;
    title: string;
    description: string; // 4096
    salary: number;
    company: CompanyModel;
    new?: boolean;
    remote?: boolean;
    fullTime?: boolean;
    partTime?: boolean;
    featured?: boolean;
    skills: SkillModel[];
    active: boolean;
    categories: JobCategoryModel[];
    createdAt: string;
    updatedAt: string;
}



