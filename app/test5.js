export function groupBy(people, key) {
    return people.reduce((total, person) => {
        (total[person[key]] = total[person[key]] || []).push(person);
        return total;
    }, {});
}

export function groupBySex(people) {
    return groupBy(people, 'sex');
}

export function groupByYearThenSex(people) {
    let yearGroup = groupBy(people, 'born');
    let group = [];
    for (let year in yearGroup) {
        if (yearGroup.hasOwnProperty(year)) {
            group[year] = groupBy(yearGroup[year], 'sex');
        }
    }
    return group;
}
