/**
 * Taken from the `vsc-ember-syntax` project. Has to be manually updated in case there are changes upstream!
 * @see https://github.com/lifeart/vsc-ember-syntax/blob/master/syntaxes/src/text.html.ember-handlebars.mjs
 */
declare const _default: {
    $schema: string;
    name: string;
    scopeName: string;
    fileTypes: string[];
    patterns: {
        include: string;
    }[];
    repository: {
        'glimmer-component-path': {
            match: string;
            captures: {
                1: {
                    name: string;
                };
            };
        };
        'string-double-quoted-handlebars': {
            name: string;
            begin: string;
            beginCaptures: {
                0: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                0: {
                    name: string;
                };
            };
            patterns: {
                name: string;
                match: string;
            }[];
        };
        'string-single-quoted-handlebars': {
            name: string;
            begin: string;
            beginCaptures: {
                0: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                0: {
                    name: string;
                };
            };
            patterns: {
                name: string;
                match: string;
            }[];
        };
        'string-double-quoted-html': {
            name: string;
            begin: string;
            beginCaptures: {
                0: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                0: {
                    name: string;
                };
            };
            patterns: ({
                name: string;
                match: string;
                include?: undefined;
            } | {
                include: string;
                name?: undefined;
                match?: undefined;
            })[];
        };
        'string-single-quoted-html': {
            name: string;
            begin: string;
            beginCaptures: {
                0: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                0: {
                    name: string;
                };
            };
            patterns: ({
                name: string;
                match: string;
                include?: undefined;
            } | {
                include: string;
                name?: undefined;
                match?: undefined;
            })[];
        };
        boolean: {
            match: string;
            captures: {
                0: {
                    name: string;
                };
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: never[];
        };
        digit: {
            match: string;
            captures: {
                0: {
                    name: string;
                };
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: never[];
        };
        param: {
            match: string;
            captures: {
                0: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
                1: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
            };
            patterns: never[];
        };
        attention: {
            name: string;
            match: string;
            patterns: never[];
        };
        'glimmer-unescaped-expression': {
            name: string;
            begin: string;
            end: string;
            captures: {
                0: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-comment-block': {
            name: string;
            begin: string;
            end: string;
            captures: {
                0: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-comment-inline': {
            name: string;
            begin: string;
            end: string;
            captures: {
                0: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-bools': {
            name: string;
            match: string;
            captures: {
                0: {
                    name: string;
                };
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                };
                4: {
                    name: string;
                };
            };
        };
        'glimmer-else-block': {
            name: string;
            match: string;
            captures: {
                0: {
                    name: string;
                };
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                    patterns: {
                        include: string;
                    }[];
                };
                4: {
                    name: string;
                };
            };
        };
        'glimmer-special-block': {
            name: string;
            match: string;
            captures: {
                0: {
                    name: string;
                };
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                };
            };
        };
        'glimmer-as-stuff': {
            patterns: {
                include: string;
            }[];
        };
        'glimmer-block': {
            name: string;
            begin: string;
            end: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                    patterns: ({
                        include: string;
                        name?: undefined;
                        match?: undefined;
                    } | {
                        name: string;
                        match: string;
                        include?: undefined;
                    })[];
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-expression-property': {
            name: string;
            begin: string;
            end: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
                4: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-expression': {
            name: string;
            begin: string;
            end: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                    patterns: ({
                        name: string;
                        match: string;
                        include?: undefined;
                    } | {
                        include: string;
                        name?: undefined;
                        match?: undefined;
                    })[];
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-supexp-content': {
            patterns: {
                include: string;
            }[];
        };
        'glimmer-control-expression': {
            name: string;
            begin: string;
            end: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
                3: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-subexp': {
            name: string;
            begin: string;
            end: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'as-keyword': {
            name: string;
            match: string;
            patterns: never[];
        };
        'as-params': {
            name: string;
            begin: string;
            beginCaptures: {
                1: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                1: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-parameter-value': {
            match: string;
            captures: {
                1: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
            };
            patterns: never[];
        };
        'glimmer-parameter-name': {
            match: string;
            captures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: never[];
        };
        variable: {
            name: string;
            match: string;
            patterns: never[];
        };
        style: {
            begin: string;
            beginCaptures: {
                1: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                1: {
                    name: string;
                };
            };
            patterns: {
                begin: string;
                beginCaptures: {
                    0: {
                        name: string;
                    };
                    1: {
                        name: string;
                    };
                    2: {
                        name: string;
                    };
                };
                end: string;
                endCaptures: {
                    0: {
                        name: string;
                    };
                    1: {
                        name: string;
                    };
                    2: {
                        name: string;
                    };
                    3: {
                        name: string;
                    };
                    4: {
                        name: string;
                    };
                };
                name: string;
                patterns: ({
                    begin: string;
                    captures: {
                        1: {
                            name: string;
                        };
                    };
                    end: string;
                    name: string;
                    patterns: {
                        include: string;
                    }[];
                } | {
                    begin: string;
                    end: string;
                    name: string;
                    patterns: {
                        include: string;
                    }[];
                    captures?: undefined;
                })[];
            }[];
        };
        script: {
            begin: string;
            beginCaptures: {
                1: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                1: {
                    name: string;
                };
            };
            patterns: {
                begin: string;
                beginCaptures: {
                    0: {
                        name: string;
                    };
                    1: {
                        name: string;
                    };
                    2: {
                        name: string;
                    };
                };
                end: string;
                endCaptures: {
                    0: {
                        name: string;
                    };
                    1: {
                        name: string;
                    };
                    2: {
                        name: string;
                    };
                    3: {
                        name: string;
                    };
                };
                name: string;
                patterns: {
                    begin: string;
                    end: string;
                    patterns: ({
                        begin: string;
                        beginCaptures: {
                            0: {
                                name: string;
                            };
                            1: {
                                name: string;
                            };
                        };
                        end: string;
                        endCaptures: {
                            0: {
                                name: string;
                            };
                            1: {
                                name: string;
                            };
                            2: {
                                name: string;
                            };
                        };
                        patterns: {
                            begin: string;
                            end: string;
                            name: string;
                            patterns: ({
                                begin: string;
                                beginCaptures: {
                                    1: {
                                        name: string;
                                    };
                                };
                                end: string;
                                patterns: {
                                    begin: string;
                                    beginCaptures: {
                                        0: {
                                            name: string;
                                        };
                                    };
                                    end: string;
                                    name: string;
                                }[];
                                captures?: undefined;
                                name?: undefined;
                                include?: undefined;
                            } | {
                                begin: string;
                                captures: {
                                    0: {
                                        name: string;
                                    };
                                };
                                end: string;
                                name: string;
                                beginCaptures?: undefined;
                                patterns?: undefined;
                                include?: undefined;
                            } | {
                                include: string;
                                begin?: undefined;
                                beginCaptures?: undefined;
                                end?: undefined;
                                patterns?: undefined;
                                captures?: undefined;
                                name?: undefined;
                            })[];
                        }[];
                        include?: undefined;
                    } | {
                        begin: string;
                        end: string;
                        endCaptures: {
                            0: {
                                name: string;
                            };
                            1: {
                                name: string;
                            };
                            2: {
                                name: string;
                            };
                        };
                        patterns: {
                            begin: string;
                            end: string;
                            name: string;
                            patterns: {
                                include: string;
                            }[];
                        }[];
                        beginCaptures?: undefined;
                        include?: undefined;
                    } | {
                        begin: string;
                        end: string;
                        endCaptures: {
                            0: {
                                name: string;
                            };
                            1: {
                                name: string;
                            };
                            2?: undefined;
                        };
                        beginCaptures?: undefined;
                        patterns?: undefined;
                        include?: undefined;
                    } | {
                        include: string;
                        begin?: undefined;
                        beginCaptures?: undefined;
                        end?: undefined;
                        endCaptures?: undefined;
                        patterns?: undefined;
                    })[];
                }[];
            }[];
        };
        'html-comment': {
            name: string;
            begin: string;
            end: string;
            captures: {
                0: {
                    name: string;
                };
            };
            patterns: ({
                include: string;
                match?: undefined;
                name?: undefined;
            } | {
                match: string;
                name: string;
                include?: undefined;
            })[];
        };
        'tag-like-content': {
            patterns: {
                include: string;
            }[];
        };
        'component-tag': {
            name: string;
            begin: string;
            beginCaptures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
                3: {
                    name: string;
                    patterns: ({
                        include: string;
                        name?: undefined;
                        match?: undefined;
                    } | {
                        name: string;
                        match: string;
                        include?: undefined;
                    })[];
                };
            };
            end: string;
            endCaptures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'html-tag': {
            name: string;
            begin: string;
            beginCaptures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            end: string;
            endCaptures: {
                1: {
                    name: string;
                };
                2: {
                    name: string;
                };
            };
            patterns: {
                include: string;
            }[];
        };
        'glimmer-argument': {
            match: string;
            captures: {
                1: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
                2: {
                    name: string;
                };
            };
        };
        'html-attribute': {
            match: string;
            captures: {
                1: {
                    name: string;
                    patterns: {
                        name: string;
                        match: string;
                    }[];
                };
                2: {
                    name: string;
                };
            };
        };
        entities: {
            patterns: ({
                name: string;
                match: string;
                captures: {
                    1: {
                        name: string;
                    };
                    3: {
                        name: string;
                    };
                };
            } | {
                name: string;
                match: string;
                captures?: undefined;
            })[];
        };
    };
};
export default _default;
//# sourceMappingURL=glimmer-handlebars-grammar.d.ts.map