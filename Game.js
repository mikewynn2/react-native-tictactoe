import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Square } from './Square';

const combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerXTurn: true,
            board: Array(9).fill(''),
            status: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Tic-Tac-Toe</Text>
                <View style={styles.row}>
                    <View>
                        <Square
                            value={this.state.board[0]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(0)}
                        />
                        <Square
                            value={this.state.board[1]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(1)}
                        />
                        <Square
                            value={this.state.board[2]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(2)}
                        />
                    </View>
                    <View>
                        <Square
                            value={this.state.board[3]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(3)}
                        />
                        <Square
                            value={this.state.board[4]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(4)}
                        />
                        <Square
                            value={this.state.board[5]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(5)}
                        />
                    </View>
                    <View>
                        <Square
                            value={this.state.board[6]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(6)}
                        />
                        <Square
                            value={this.state.board[7]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(7)}
                        />
                        <Square
                            value={this.state.board[8]}
                            playerXTurn={this.state.playerXTurn}
                            onClick={() => this.handleClick(8)}
                        />
                    </View>
                </View>
                <View>
                    {this.state.status ? (
                        <Text
                            style={styles.status}
                        >Winner: {this.state.status}</Text>) : (
                            <Text
                                style={styles.status}
                            >{ 'Player ' + (this.state.playerXTurn  ? 'X' : 'O') + ' Turn' }</Text>)
                    }

                </View>
                <Text
                    style={styles.reset}
                    onPress={this.restartClick.bind(this)}
                >RESET</Text>
                 
            </View>
        );
    }

    handleClick(index) {
        if (this.state.status || this.state.board[index]) {
            return;
        }
        const newBoard = this.state.board.slice();
        newBoard[index] = this.state.playerXTurn ? 'X' : 'O';

        this.setState({
            playerXTurn: !this.state.playerXTurn,
            board: newBoard,
            status: this.findWinner(newBoard)
        });
    }

    restartClick() {
        this.setState({
            playerXTurn: true, 
            board: Array(9).fill(''),
            status: ''
        })
    }

    findWinner(board) {
        for (let i = 0; i < combos.length; i++) {
            const [a, b, c] = combos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
}

const styles = StyleSheet.create({

    label: {
        fontSize: 64,
        color: 'white',
    },

    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },

    status: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    reset: {
        fontSize: 40,
        borderRadius: 2,
        borderColor: 'steelblue',
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


